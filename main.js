//Base is the character of a DNA Strand. DNA strand is an array...

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
  return {
    num,
    dna,

    // Copies the DNA strand above and mutates it to have a random base changed to one of the other 4 bases
    mutate() {
      let randomBaseIndex = Math.floor(Math.random() * 15);
      let baseToBeMutated = this.dna[randomBaseIndex];
      let newBase = returnRandBase();
      let mutatedArray = [];

      // If the old base equals the new base generated, it will keep running until a different base is found.
      while (baseToBeMutated === newBase) {
        newBase = returnRandBase();
      }
      if (baseToBeMutated !== newBase) {
        mutatedArray = [...this.dna];
        mutatedArray.splice(randomBaseIndex, 1, newBase);
      }

      return mutatedArray;
    },

    // Loops through the DNA strand passed through it to check where the bases are the same at the same index of the DNA strand
    compareDna(otherDna) {
      let amountEqual = 0;
      for (let i = 0; i < otherDna.dna.length; i++) {
        if (this.dna[i] === otherDna.dna[i]) {
          amountEqual++;
        }
      }
      amountEqual /= 15;
      amountEqual *= 100;
      return `Dna Specimen Number ${this.num} and Specimen Number ${
        otherDna.num
      } are ${amountEqual.toFixed(2)} percent equal.`;
    },

    likelySurvive() {
      let survivalRate = 0;
      for (let i = 0; i < dna.length; i++) {
        if (this.dna[i].includes("C") || this.dna[i].includes("G")) {
          survivalRate++;
        }
      }
      if (survivalRate >= 9) {
        return true;
      } else {
        return false;
      }
    },
  };
};

const highSurvivalFactory = () => {
  let highSurvivalArr = [];
  let instancesOfHighSurvival = 0;

  while (instancesOfHighSurvival < 30) {
    if (this.pAequorFactory.likelySurvive === true) {
      highSurvivalArr.push(this.pAequorFactory.dna);
      highSurvivalArr++;
    }
  }
};

let test1 = pAequorFactory(666, mockUpStrand());
let test2 = pAequorFactory(667, mockUpStrand());
let test3 = pAequorFactory(999, [
  "G",
  "G",
  "G",
  "C",
  "C",
  "C",
  "C",
  "T",
  "C",
  "A",
  "C",
  "T",
  "A",
  "A",
  "A",
]);
console.log(`Specimen Number: ${test1.num} Dna : ${test1.dna}`);
console.log(`Specimen Number: ${test1.num} Mutation: ${test1.mutate()}`);
console.log(`Specimen Number: ${test2.num} Dna : ${test2.dna}`);
console.log(`Specimen Number: ${test2.num} Mutation: ${test2.mutate()}`);
console.log(test1.compareDna(test2));
console.log(test3.likelySurvive());
console.log(highSurvivalFactory());
