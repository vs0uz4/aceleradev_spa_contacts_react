import React from 'react';
import dayjs from 'dayjs';

import './style.scss';

class Contact extends React.Component {
  render() {
    const { data, isHeader } = this.props;

    return (
      <>
        { isHeader && 
          <article className="contact" data-testid="contact">
            <span className="contact__avatar" />
            <span className="contact__data">Nome</span>
            <span className="contact__data">Telefone</span>
            <span className="contact__data">País</span>
            <span className="contact__data">Admissão</span>
            <span className="contact__data">Empresa</span>
            <span className="contact__data">Departamento</span>
          </article>
        }

        { data &&
          <article className="contact" data-testid="contact">
            <span className="contact__avatar">
              <img src={ data.avatar } alt={ data.name } />
            </span>
            <span className="contact__data">{ data.name }</span>
            <span className="contact__data">{ data.phone }</span>
            <span className="contact__data">{ data.country }</span>
            <span className="contact__data">{ dayjs(data.admissionDate).format('DD/MM/YYYY') }</span>
            <span className="contact__data">{ data.company }</span>
            <span className="contact__data">{ data.department }</span>
          </article>
        }
      </>
    );
  }
}

export default Contact;
