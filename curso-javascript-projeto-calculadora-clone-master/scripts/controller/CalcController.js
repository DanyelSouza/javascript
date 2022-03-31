class CalcController {
    constructor() {
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display")
        this._dateCalcEl = document.querySelector("#data")
        this._timeCalcEl = document.querySelector("#hora")
        this._currentDate
        this.initialize()
        this.initButtons()
    }
    initialize() {

        this.setDisplayDateTime()

        setInterval(() => {
            this.setDisplayDateTime()
        }, 1000)
         // aqui mostra as horas
        /*
        setTimeout(()=>{
            clearInterval(Interval)
        },10000)
        */
        // primeiro paramentro ==> a função q quero executar
        // segundo parametro o tempo q a função será executada
    }
    addEventListenerAll(element , events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false)
        })
    }
    initButtons() {
        let buttons = document.querySelectorAll("#buttons > g, #parts > g")

        buttons.forEach((btn,index) => {
            this.addEventListenerAll(btn, 'click drag mouseover', (e) => {
                console.log(btn.className.baseVal.replace("btn-",""))
            })
            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>{
                btn.style.cursor = "pointer"
            })
        })
    }
    setDisplayDateTime() {
        this.displayDate = this._currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "short",
            year: "numeric"
        })
        this.displayTime = this._currentDate.toLocaleTimeString(this._locale)
    }

    get displayTime() {
        return this._timeCalcEl.innerHTML
    }

    set displayTime(value) {
        this._timeCalcEl.innerHTML = value
    }

    get displayDate() {
        return this._dateCalcEl.innerHTML
    }

    set displayDate(value) {
        this._dateCalcEl.innerHTML = value
    }


    /* Parte onde mostra os calculos */
    get displayCalc() {
        return this._displayCalcEl.innerHTML
    }
    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value
    }

    get _currentDate() {
        return new Date()
        /*
        Mostra na tela !!!

        dt.getDate () dia 
        dt.getMonth() mês
        dt.getFullYear() ano
        dt.toLocaleDateString('pt.BR') // padrão brasileiro dia mês ano 
        dt.toLocaleDateString('pt.BR' , {Month: 'long'}) mês sem abreviar
        dt.toLocaleDateString('pt.BR' , {Month: 'short'}) mês abreviado
        */
    }
    set _currentDate(value) {
        this._currentDate = value
    }
}
