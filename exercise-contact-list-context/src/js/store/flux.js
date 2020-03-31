const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			apiURL: "http://assets.breatheco.de/apis/fake/contact",
			agendas: null,
			agenda: null, //agenda seleccionada en ese momento
			contacts: null, // donde van a estar guardados toedos los contactos
			contact: null// contacto seleccionado para guardarlo o editarlo
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			handleChangeAgenda: e => {
				const { name, value } = e.target;
				setStore({
					[name]: value ? value : null // si tiene un valor, pornerle el valor o null
				});
			},

			getAgendas: url => {
				const store = getStore();
				fetch(store.apiURL + + url)
					.then(resp => resp.json())
					.then(data => {
						setStore({
							agendas: data
						})
					})
			},
			loadContactByAgenda: () => {
				const store = getStore();
				if (store.agenda !== null) {
					fetch(store, apiURL + "/agenda/" + store.agenda)
						.then(resp => resp.json())
						.then(data => {
							setStore({
								contacts: data
							});
						});
				} else {
					alert("Debe seleccionar una agenda")
				}
			},
		}
	};
};


export default getState;