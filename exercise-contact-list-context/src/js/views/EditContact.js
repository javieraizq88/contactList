import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditContact = props => {
	const { store, actions } = useContext(Context);
	const contactId = props.match.params.id; //id del contacto q se ubtiene por el URL
	const [contact, setContact] = useState({
		full_name: "",
		email: "",
		agenda_slug: "",
		address: "",
		phone: ""
	});

	useEffect(() => {
		if (store.contacts !== null) {
			let contact = store.contacts.filter((contact) => {
				return contact.id === contactId;
			})
			setContact(contact[0]); //le paso el parametro nuevo con los obj q coincidan con el id
		}
	});
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit a contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input type="text" className="form-control" placeholder="Full Name" value={contact.full_name} />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" placeholder="Enter email" value={contact.email} />
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="phone" className="form-control" placeholder="Enter phone" value={contact.phone} />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input type="text" className="form-control" placeholder="Enter address" value={contact.address} />
					</div>
					<button type="button" className="btn btn-success form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};



/**
 * Define the data-types for
 * your component's properties
 **/
EditContact.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object,
};
