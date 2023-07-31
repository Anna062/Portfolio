import React from "react";
import '../styles/Competences.css';

const Competences = () => {
    return <section>
        <h1>Compétences</h1>
        <div className="competences">
            <div>
                <h3>Langage Java</h3>
                <p className="cp">Connaissances de la bibliothèque Swing, création de projets avec Eclipse, <br/> Maven, Tomcat, Gradle</p>
            </div>
            <div>
                <h3>Programmation Front-end</h3>
                <p className="cp">Bonnes connaissances en JavaScript,TypeScript et <br/>frameworks tels que React.js, Angular
Tests unitaires, intégration, HTML/CSS</p>
            </div>
            <div>
                <h3>Programmation Back-end</h3>
                <p className="cp">Connaissances et utilisation des API Rest, Node Js et <br/> base solide en bases de données relationnelles telle que MySQL</p>
            </div>
        </div>
    </section>
}

export default Competences;