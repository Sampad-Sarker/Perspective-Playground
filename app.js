const app = Vue.createApp({
    data() {
        return {
            perspective:100,
            rotateX:0,
            rotateY:0,
            rotateZ:0,
            color:'#8d81f3',
            width:150,
            height:150
            
        }
    },
    methods: {
        reset(){
            this.color='#8d81f3';
            this.width=150;
            this.height=150;
            this.perspective=100;
            this.rotateX=0;
            this.rotateY=0;
            this.rotateZ=0;
            
        },
        copy(){
            const el = document.createElement('textarea')
            


            el.value = `backgroundColor:${this.boxStyle.backgroundColor} width:${this.boxStyle.width} height:${this.boxStyle.height} transform:${this.boxStyle.transform}`

            console.log(el.value);
            el.setAttribute('readonly','')
            el.style.position="absolute"
            el.style.left='-9999999999px'

  

            document.body.appendChild(el)
            el.select()

            
            document.execCommand('copy')

            document.body.removeChild(el)
            
        }
    },
    computed:{
        boxStyle(){
            return{
                backgroundColor:this.color,
                width:this.width,
                height:this.height,
                transform:`perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`

            }
        }
    }
})

app.mount("#app")