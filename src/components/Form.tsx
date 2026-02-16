import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  //Call React-hook-form to get a form object.
  const { register, handleSubmit } = useForm();
  //handle data submission, and send it to the server. For now just log it on the console.
  const onSubmit = (data: FieldValues) => console.log(data);
  //see all the methods it has
  //console.log(form);

  /*   //use the state hook to create an object. By using React-hook-form you no longer need to create a person object.
  const [person, setPerson] = useState({
    name: "",
    age: "",
  }); */

  /*  This handler is no longer needed, when you use React-hook-form. 
    const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  }; */
  /*   //Accesing Input fields. Replaced by using the State Hook instead, above. 
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 }; //Send this object to the server to be saved.  
  //Handle Form submission.
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    console.log(person);
    }; */

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          /*           //every time the user types a keystroke, we update the name of the person. Replaced by React-hook-form
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          value={person.name} */
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          /*           //every time the user types a keystroke, we update the age of the person.Replaced by React-hook-form.
          onChange={(event) =>
            setPerson({ ...person, age: event.target.value })
          }
          value={person.age} */
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
