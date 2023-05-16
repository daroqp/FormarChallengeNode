function range_vision(number) {
  const arrInput = Array.from(String(number)).map((item) => Number(item));
  const MINIMUM_VISION_VALUE = 8;

  for (let i = 0; i < arrInput.length; i++) {
    const ini = i + 1;
    const fin = ini + arrInput[i];

    const seeRight = arrInput.slice(ini, fin);

    const seeLeft = arrInput
      .slice(0, ini - 1)
      .reverse()
      .slice(0, arrInput[i]);

    const allVisions = [...seeRight, ...seeLeft];
    const visionValue = allVisions.reduce((acc, curr) => acc + curr, 0);

    if (visionValue < MINIMUM_VISION_VALUE) return false;
  }
  return true;
}
