export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Conheça nosso Time</h2>
          <p>
          Contamos com professores e funcionários qualificados.
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <a
                  href='#team'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  todos os membros
                </a>{' '}
              </div>
        </div>
      </div>
    </div>
  )
}
