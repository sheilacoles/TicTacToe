describe("Site", function () {

    describe("add", function () {

        it("passing 1 and 1 to the add function should return 2", function () {
            var result = add(1, 1);

            expect(result).toEqual(2);
        });

        it("passing 'asda' and 'asda' to the add function should return error message 'Invalid Input'", function () {
            var result = add('asda', 'asda');

            expect(result).toEqual('Invalid Input');
        });
    })

    describe("minus", function () {
        it("passing 1 and 1 to the minus function should return 0", function () {
            var result = minus(1, 1);
            expect(result).toEqual(0);
        })
    })

    describe("multiply", function () {
        it("passing 1 and 1 to the multiply function should return 1", function () {
            var result = multiply(1, 1);
            expect(result).toEqual(1);
        })

    })
    describe("divide", function () {
        it("passing 10 and 2 to the divide function should return 5", function () {
            var result = divide(10, 2);
            expect(result).toEqual(5);
        })
    })

    describe("cellClicked", function () {

        beforeEach(function ()
        {
            spyOn(window,"showSvg")
        })

        it("if lastPlayerMoved = null expect showSvg to be called with .cross", function ()
        {
            // arrrange
            lastPlayerMoved = null;

            // act
            cellClicked();

            // assert
            expect(window.showSvg).toHaveBeenCalledWith(".cross", 1, window);
        })
        it("if lastPlayerMoved = 1 expect showSvg to be called with .circle", function () {
            lastPlayerMoved = 1;
            cellClicked();
            expect(window.showSvg).toHaveBeenCalledWith(".circle", 2, window);
        })        
        it("if lastPlayerMoved = 2 expect showSvg to be called with .cross", function () {
            lastPlayerMoved = 2;
            cellClicked();
            expect(window.showSvg).toHaveBeenCalledWith(".cross", 1, window);
        })        

    })

    describe("getState", function ()
    {
        it("when no one has taken a turn expect to return an array of [0,0,0,0,0,0,0,0,0]", function ()
        {
            //arrange
            clearBoard();
            //act
            var result = getState();
            //assert
            expect(result).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0]); 
        })
        it("when player 1 has chosen position 0 expect to return an array of [1,0,0,0,0,0,0,0,0]", function () {
            //arrange
            clearBoard();
            //act
            var result = getState();
            //assert
            expect(result).toEqual([1, 0, 0, 0, 0, 0, 0, 0, 0]);
        })
        it("when player 2 has chosen position 1 expect to return an array of [1,2,0,0,0,0,0,0,0]", function () {
            //arrange
            clearBoard();
            //act
            var result = getState();
            //assert
            expect(result).toEqual([1, 2, 0, 0, 0, 0, 0, 0, 0]);
        })

    })
});
