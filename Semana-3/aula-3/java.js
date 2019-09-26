alert("Seja bem vindo ao Blog Devs")

class Post {
    constructor (titulo, data, urlDaCapaPost){
        this.titulo = titulo;
        this.data = data;
        this.urlDaCapaPost = urlDaCapaPost;
    }
    buscaPost(){
        const tituloPost = this.titulo + "-" + this.data;
        return tituloPost;
    }
}

const post1 = new Post ("Titulo post1", "Data", "https://picsum.photos/200/200");
const post2 = new Post ("Titulo post2", "Data", "https://picsum.photos/200/200");
const post3 = new Post ("Titulo post3", "Data", "https://picsum.photos/200/200");
const post4 = new Post ("Titulo post4", "Data", "https://picsum.photos/200/200");

const posts = [post1, post2, post3, post4];

const coletaniaDePosts = document.getElementById("coletaniaDePosts");

for (let postagens of posts ) {
    coletaniaDePosts.innerHTML += "<li>" + postagens.buscaPost() + "</li>";
    coletaniaDePosts.innerHTML += "<img src='" + postagens.urlDaCapaPost + "'>";
}