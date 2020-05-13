export default class GroupingUserDto {
  id;
  userStatus;
  email;
  nationCode;
  phoneNumber;
  name;
  userId;
  gender;
  birthDay;
  representProfileImage;

  constructor(data = {}) {
    Object.assign(this, data);
  }
}