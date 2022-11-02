const { createApp } = Vue

const app = createApp({
    data(){
        return{
            error: false,
            testoUtente: {
                text: '',
                isFalse: false
            },
            arrayLista:[
                {
                    text: 'raccogliere le olive',
                    isFalse: false
                },
                {
                    text: 'portarle al frantoio',
                    isFalse: false
                },
                {
                    text: 'mettere l\' olio nelle giare',
                    isFalse: false
                },
                {
                    text: 'sistemare il css',
                    isFalse: false
                }
                
            ],
            class: ''
        }
    },
    methods:{
        addTestoUtente(){
            if(this.testoUtente.text.length != 0){
                this.arrayLista.unshift(this.testoUtente);
                this.testoUtente = {
                    text: '',
                    isFalse: false
                },
                this.error = false;
            }else{
                this.error = true;
            }
        },

        remove(i){
            this.arrayLista.splice(i,1);
        }
    }
});
app.mount('#app');