const findDuplicates = function (ages) {
  const duplicateCount = {};

  for (let i = 0; i < ages.length; i++) {
    if (duplicateCount[ages[i]] == undefined) {
      duplicateCount[ages[i]] = 1;
    } else {
      console.log(`${ages[i]} has a duplicate`);
    }
  }
};

findDuplicates([1, 2, 3, 2, 4, 1]);
