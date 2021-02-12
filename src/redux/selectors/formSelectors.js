import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.form.contacts;

const getFilter = (state) => state.form.filter;
const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
const loading = (state) => state.form.isLoading;

export { getContacts, getFilter, getFilteredContacts, loading };