describe("Workshop 1: Imperative and Declarative JavaScript", function() {
    describe("Exercise 1: solve Project Euler Problem 2 using an imperative while loop", function() {
      // it("Function `projectEulerProblem2_imperative` exists.", function() {
      //   expect(main.projectEulerProblem2_imperative).is.a('function');
      // });
      it("The answer for max=2 is 2.", function() {
        const r = projectEulerProblem2_imperative(2);
        expect(r).to.equal(2)
      });
      it("The answer for max=5 is 2.", function() {
        const r = projectEulerProblem2_imperative(5);
        expect(r).to.equal(2)
      });
      it("The answer for max=10 is 10 (2 + 8).", function() {
        const r = projectEulerProblem2_imperative(10);
        expect(r).to.equal(10)
      });
      it("The answer for max=4000 is correct.", function() {
        const r = projectEulerProblem2_imperative(400);
        expect(hash(r+"")).to.equal(String(59754797))
      });
      it("The answer for max=4000000 is correct.", function() {
        const r = projectEulerProblem2_imperative(4000000);
        expect(hash(r+"")).to.equal(String(87357469))
      });
    });

    describe("Exercise 2: Solve Project Euler Problem 2 without using any mutable variables", function() {
      // it("Function `projectEulerProblem2_pure` exists.", function() {
      //   expect(projectEulerProblem2_pure).is.a('function');
      // });
      it("The answer for max=2 is 2.", function() {
        const r = projectEulerProblem2_pure(2);
        expect(r).to.equal(2)
      });
      it("The answer for max=5 is 2.", function() {
        const r = projectEulerProblem2_pure(5);
        expect(r).to.equal(2)
      });
      it("The answer for max=10 is 10 (2 + 8).", function() {
        const r = projectEulerProblem2_pure(10);
        expect(r).to.equal(10)
      });
      it("The answer for max=4000 is correct.", function() {
        const r = projectEulerProblem2_pure(400);
        expect(hash(r+"")).to.equal(String(59754797))
      });
      it("The answer for max=4000000 is correct.", function() {
        const r = projectEulerProblem2_pure(4000000);
        expect(hash(r+"")).to.equal(String(87357469))
      });
    });
    
    describe("Exercise 3: implement isDivisibleBy", function() {
      // it("Function `isDivisibleBy` exists.", function() {
      //   expect(isDivisibleBy).is.a('function');
      // });
      it("`isDivisibleBy` returns a function", function() {
        const f = isDivisibleBy(2);
        expect(f).is.a('function');
      });
      it("`isDivisibleBy(2)` tests even numbers", function() {
        const f = isDivisibleBy(2);
        expect(f(2)).to.equal(2)
        expect(f(3)).to.equal(0)
        expect(f(4)).to.equal(4)
        const range = [...Array(100).keys()],
              evens = range.map(x=>x*2),
              odds = evens.map(x=>x+1);
        evens.forEach(x=>expect(f(x)).to.equal(x))
        odds.forEach(x=>expect(f(x)).to.equal(0))
      });
      it("`isDivisibleBy(3)` tests divisibility by 3", function() {
        const f = isDivisibleBy(3);
        expect(f(2)).to.equal(0)
        expect(f(3)).to.equal(3)
        expect(f(9)).to.equal(9)
        const range = [...Array(100).keys()], 
              multiplesOfThree = range.map(x=>x*3)
        multiplesOfThree.forEach(x=>expect(f(x)).to.equal(x))
        range.filter(x=>!f(x)).forEach(x=>expect(f(x)).to.equal(0))
      });
    });
    
    describe("Exercise 4: sum fibs divisible by 3", function() {
      // it("Function `projectEulerProblem2_pure` exists.", function() {
      //   expect(sumOfFibsDivisibleByThree).is.a('function');
      // });
      it("The answer for max=2 is 0.", function() {
        const r = sumOfFibsDivisibleByThree(2);
        expect(r).to.equal(0)
      });
      it("The answer for max=5 is 3.", function() {
        const r = sumOfFibsDivisibleByThree(5);
        expect(r).to.equal(3)
      });
      it("The answer for max=100 is 24 (3 + 21).", function() {
        const r = sumOfFibsDivisibleByThree(100);
        expect(r).to.equal(24)
      });
      it("The answer for max=4000 is correct.", function() {
        const r = sumOfFibsDivisibleByThree(400);
        expect(hash(r+"")).to.equal(String(57658026))
      });
    });
  });
