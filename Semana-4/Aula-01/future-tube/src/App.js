import React from 'react';
import './App.css';

function App() {
  return (
    <div class="container">
      <header>
        <h1>FutureTube</h1>
        <div id="buscar" class="busca">
               <form  method="GET" action="/search" accept-charset="UTF-8">
                 <input class type="hidden" name="utf8"></input>
                 <input  class="form-input" type="text" name="" id="buscar-item" placeholder="busca" autocomplete="on"
                        aria-label="procurar"></input>
               </form>
            </div>
      </header>
      <main>
        <article class="menu">
          <div class="menu-item">
            <ul>
              <p title="inicio">Inicio</p>
              <p title="Em alta">Em alta</p>
              <p title="Inscriçoes">Inscriçoes</p>
              <p title="Originais">Originais</p>
              <hr></hr>
              <p title="Biblioteca">Biblioteca</p>
              <p title="Historico">Historico</p>

            </ul>
          </div>
        </article>

        <article class="item">
          <div><ideo><source></source></ideo>
          <p>Wake Up</p>
          </div>
        </article>

        <article class="item">
          <div><ideo><source></source></ideo>
          <p>Wake Up</p>
          </div>
        </article>

        <article class="item">
          <div><ideo><source></source></ideo>
          <p>Wake Up</p>
          </div>
        </article>

        <article class="item">
          <div><ideo><source></source></ideo>
          <p>Wake Up</p>
          </div>
        </article>

        <article class="item">
          <div><ideo><source></source></ideo>
          <p>Wake Up</p>
          </div>
        </article>

        <article class="item">
          <div><ideo><source></source></ideo>
          <p>Wake Up</p>
          </div>
        </article>

        <article class="item">
          <div><ideo><source></source></ideo>
          <p>Wake Up</p>
          </div>
        </article>

        <article class="item">
          <div><ideo><source></source></ideo>
          <p>Wake Up</p>
          </div>
        </article>

      </main>
          </div>
    
    
  );
}

export default App;
