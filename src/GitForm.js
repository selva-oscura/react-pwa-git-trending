import React from 'react';

const GitForm = ({form, submitForm, updateFormState}) => {
  return (
    <div className="GitForm row">
      <form>
        <label htmlFor="language">
          Language
          <input
            type="text"
            className="col s12 m4"
            id="language"
            value={form.language}
            placeholder="Language"
            onChange={updateFormState}
          />
        </label>
        <input
          type="button"
          className="teal"
          value="Update"
          onClick={submitForm}
        />
     </form>

    </div>
  );
};

export default GitForm;
