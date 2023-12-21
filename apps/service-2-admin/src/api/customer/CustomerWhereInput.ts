import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  firstNAme?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
};
