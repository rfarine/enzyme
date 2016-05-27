import { default as React, Component, PropTypes } from 'react';
import Button from './Button';
import { reduxForm } from 'redux-form';

class Form extends Component {
  render() {
    const { fields: { firstName, lastName, email }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" placeholder="First Name" { ...firstName }/>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" { ...lastName }/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Email" { ...email }/>
        </div>
        <Button clickEvent={ (e) => e.preventDefault() } text="Submit" />
      </form>
    );
  }
}

Form.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

Form = reduxForm({
  form: 'contact',
  fields: ['firstName', 'lastName', 'email']
})(Form);

export default Form;