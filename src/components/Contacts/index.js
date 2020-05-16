import React from 'react';
import Contact from '../Contact';

import './style.scss';

class Contacts extends React.Component {
	render = () => {
    const { contactList, isLoading } = this.props;

		return (
			<div className="container" data-testid="contacts">
				<section className="contacts">
					<Contact isHeader={ true } />
					
          { isLoading && 
						<div className="contacts__loading">
							<span>Carregando...</span>
						</div>
					}

          { !contactList && 
            <div className="contacts__empty">
              <span>Não Existem Contatos a Serem Exibidos...</span>
            </div>
          }
					
          { contactList && contactList.map( contact => <Contact data={ contact } key={ contact.id } isHeader={ false } /> ) }
				</section>
			</div>
		);
	}
}

export default Contacts;
