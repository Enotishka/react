export const CHANGE_NAME = "PROFILE::CHANGE_NAME";
export const TOGGLE_PROFILE = "PROFILE::TOGGLE_PROFILE";

export const changeName = (name) => ({
  type: CHANGE_NAME,
  value: name,
});

export const toggleProfile = () => ({
  type: TOGGLE_PROFILE,
});
