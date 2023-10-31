type Gender = 'Male' | 'Female' | 'Other' | 'Prefer not to mention';
type AccountType = 'Personal' | 'Pro' | 'Business';

export type User = {
  userName: string;
  userSurname: string;
  birthday: string;
  gender: Gender | '';
  email: string;
  passwd: string;
  isOk: boolean;
  accountType: AccountType | '';
};
