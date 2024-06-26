import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <label>
        <input
          type="text"
          name="name"
          placeholder="Contact Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="Contact Name"
          required
        />
        </label>
        <br />
        <label>
        <input
          type="tel"
          name="phone"
          placeholder="Contact Phone Number (###-###-####)"
          value={phone}
          pattern="^(((\+44\s?|0044\s?)?|(\(?0))((2[03489]\)?\s?\d{4}\s?\d{4})|(1[23456789]1\)?\s?\d{3}\s?\d{4})|(1[23456789][234578][0234679]\)?\s?\d{6})|(1[2579][0245][0467]\)?\s?\d{5})|(11[345678]\)?\s?\d{3}\s?\d{4})|(1[35679][234689]\s?[46789][234567]\)?\s?\d{4,5})|([389]\d{2}\s?\d{3}\s?\d{4})|([57][0-9]\s?\d{4}\s?\d{4})|(500\s?\d{6})|(7[456789]\d{2}\s?\d{6})))$"
          onChange={(e) => setPhone(e.target.value)}
          aria-label="Contact Phone Number"
          required
        />
        </label>
        <br />
        <label>
        <input
          type="email"
          name="email"
          placeholder="Contact Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Contact Email"
          required
        />
        </label>
        <br />
        <input
        type="submit"
        value="Add Contact"
        aria-label="Add Contact"
        />
      </form>
    </div>
  );
};

