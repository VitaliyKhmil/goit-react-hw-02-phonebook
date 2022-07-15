import { Component } from 'react';
import { Form } from 'components/ui/Form';
import { Label } from 'components/ui/Label';
import { Input } from 'components/ui/Input';
import { Button } from 'components/ui/Button.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  inputReset = e => {
    e.target.name.value = '';
    e.target.number.value = '';
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact(this.state.name, this.state.number);
    this.inputReset(e);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.props.nameInputId}>
          Name
          <Input
            id={this.props.nameInputId}
            type="text"
            name="name"
            onChange={this.onInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor={this.props.numberInputId}>
          Number
          <Input
            id={this.props.numberInputId}
            type="tel"
            name="number"
            onChange={this.onInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
