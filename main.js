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
    specimenNum: num,
    dna: dna,

    //Takes the DNA strand, finds a random base and changes it to one of the other 3 bases.

    mutate() {
      let randomBaseIndex = math.floor(math.random() * 15);
      let baseToBeMutated = dna[randomBaseIndex];
      let newBase = returnRandBase();
      let mutatedArray = [];

      while (baseToBeMutated == returnRandBase) {
        returnRandBase()

      } if(baseToBeMutated !== returnRandBase){
        mutatedArray = dna.splice(baseToBeMutated, 1, newBase);}

      
      return mutatedArray;
    },
  };
}

console.log(pAequorFactory(1, mockUpStrand()))
