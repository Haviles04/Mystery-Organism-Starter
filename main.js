// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Creates new dna strand object with speciman number, DNA, and a mutated version of the DNA
const pAequorFactory = (num, dna) => {
  const mutate = () => {
    let randomBaseIndex = Math.floor(Math.random() * 15);
    let baseToBeMutated = dna[randomBaseIndex];
    let newBase = returnRandBase();
    let mutatedArray = [];

    while (baseToBeMutated === newBase) {
      newBase = returnRandBase();
    }
    if (baseToBeMutated !== newBase) {
        mutatedArray = [...dna]
        mutatedArray.splice(randomBaseIndex,1,newBase);
    }

    return mutatedArray;
  };

  return {
    specimenNum: num,
    dna: dna,
    mutate: mutate(),
  };
};

console.log(pAequorFactory(1, mockUpStrand()));
