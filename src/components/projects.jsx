import React from "react";
import Menu from "./projectsHorizontalMenu/ProjectsMenu"

export const Projects = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Nossos projetos</h2>
          <p>
          Uma parte fundamental para qualificar profissionais preparados para o mercado de trabalho é a prática, com isso junto com parceiros da indústria desenvolvemos um “chão de fábrica" para os alunos evoluírem com projetos reais.
          </p>
        </div>
      <div className="Projects-menu">
        {props.data?<Menu props={props}/>:'loading...'}
      </div>
      </div>
    </div>
  )
}
