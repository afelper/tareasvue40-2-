var app = new Vue({
    el: '#app',
    data: {
        proyecto: 'Tareas con Vue',
        grupo: 'grupo 40',
        nuevaTarea: '',
        tareas: []
    },
    methods: {
        agregarTarea(dependencia){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            //console.log(this.nuevaTarea)
            this.nuevaTarea = '';
            localStorage.setItem('tareasVue', JSON.stringify(this.tareas));
        },
        cambiarEstado(index){
            this.tareas[index].estado = !this.tareas[index].estado;
            localStorage.setItem('tareasVue', JSON.stringify(this.tareas));
        },
        eliminarNota(index){
            this.tareas.splice(index,1);
            localStorage.setItem('tareasVue', JSON.stringify(this.tareas));
        }

    },
    computed: {
        titulo(){
            return this.proyecto + ' ' + '-' + ' ' + this.grupo;
        },
        textoEstado(){
            return this.tareas[this.indice].estado ? 'Realizado': 'Pendiente';
        }
    },
    created(){
        let data = JSON.parse(localStorage.getItem('tareasVue'));
        if(data){
            this.tareas = data;
        }else{
            this.tareas = [];
        }
    }
});