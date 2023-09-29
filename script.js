// TODO: Create a general screen update function
// TODO: Get operands working

const calculator = {
    screenOperand: null,
    screenEquations: null,
    calcArr: [],
    currentOperand: '',

    init: function(){
        this.screenOperand = document.querySelector('.screen-operand');
        this.screenEquation = document.querySelector('.screen-equation');
        this.setupEventListeners();
    },

    addNumber: function(num){
        this.currentOperand += num;
        this.screenOperand.innerHTML = this.currentOperand;
    },

    deleteNumber: function(){
        this.currentOperand = this.currentOperand.slice(0,-1);
        this.screenOperand.innerHTML = this.currentOperand;
    },

    setupEventListeners: function(){
        const numberBtns = document.querySelectorAll('.number');
        numberBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.addNumber(btn.innerHTML);
            });
        });

        const deleteBtn = document.querySelector('.delete')
        deleteBtn.addEventListener('click', () => {
            this.deleteNumber()
        });
    },
};

window.onload = calculator.init();