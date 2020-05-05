import React from 'react';

import './style.scss';

class Filters extends React.Component {
	constructor(props) {
		super(props);
		this.txtFilter = React.createRef();
		this.state = {
		  filter: '',
		  orderedBy: '',
		  order: 'asc',
		}
		this.handleOrder = this.handleOrder.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
	}

	toggleOrder(){
        const order = this.state.order;
        this.setState( order === 'asc' ? { order: 'desc' } : { order: 'asc' } ); 
    }

	handleOrder(sort) {
		const { onOrder } = this.props;
		this.toggleOrder();
		this.setState({ orderedBy: sort } );
		onOrder(sort, this.state.order);
	}

	handleFilter(event) {
		const { onFilter } = this.props;
		const filter = this.txtFilter.current.value.trim();
		this.setState({ filter });
		onFilter(filter);
	}

	render() {
		const { orderedBy, order } = this.state;
		return (
			<div className="container" data-testid="filters">
				<section className="filters">
					<div className="filters__search">
						<input ref={ this.txtFilter } type="text" className="filters__search__input" placeholder="Pesquisar" onChange={ this.handleFilter } />

						<button className="filters__search__icon" onClick={ () => this.handleFilter }>
							<i className="fa fa-search"/>
						</button>
					</div>

					<button className={ `filters__item ${orderedBy === 'name' && 'is-selected'}` } onClick={ () => this.handleOrder('name') }>
						Nome <i className={ (orderedBy === 'name' && order === 'asc') ? 'fas fa-sort-alpha-up' : 'fas fa-sort-alpha-down' }  />
					</button>

					<button className={ `filters__item ${orderedBy === 'country' && 'is-selected'}` } onClick={ () => this.handleOrder('country') }>
						País <i className={ (orderedBy === 'country' && order === 'asc') ? 'fas fa-sort-alpha-up' : 'fas fa-sort-alpha-down' }  />
					</button>

					<button className={ `filters__item ${orderedBy === 'admissionDate' && 'is-selected'}` } onClick={ () => this.handleOrder('admissionDate') }>
						Data de admissão <i className={ (orderedBy === 'admissionDate' && order === 'asc') ? 'fas fa-sort-numeric-up' : 'fas fa-sort-numeric-down' }  />
					</button>

					<button className={ `filters__item ${orderedBy === 'company' && 'is-selected'}` } onClick={ () => this.handleOrder('company') }>
						Empresa <i className={ (orderedBy === 'company' && order === 'asc') ? 'fas fa-sort-alpha-up' : 'fas fa-sort-alpha-down' }  />
					</button>

					<button className={ `filters__item ${orderedBy === 'department' && 'is-selected'}` } onClick={ () => this.handleOrder('department') }>
						Departamento <i className={ (orderedBy === 'department' && order === 'asc') ? 'fas fa-sort-alpha-up' : 'fas fa-sort-alpha-down' }  />
					</button>
				</section>
			</div>
		);
	}
}

export default Filters;
