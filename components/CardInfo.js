Vue.component('CardInfo', {
    template: `
    <div class="card" style="width: 18rem;">
        <img src="https://placeimg.com/280/180/any" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{cardTitle}}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `,
    data(){
        return{
            cardTitle: 'Título de la Tarjeta'
        }
    },
    methods:{},
    computed:{},
    created(){

    }
});