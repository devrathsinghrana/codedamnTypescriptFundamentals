// We don't have features like below in interfaces. Interface always has to be an object type and may not take primitive types, UNION or INTERSECTION types or advanced function types. Type aliases can do that, and they also help in making complex conditional types. So, type aliases are more powerful and flexible than interfaces. It is recommended to use type aliases for complex types and interfaces for object shapes eg APIs and deep type nestings. Else take type ALIAS as first choice.
type InputStringType = string;
type InputFieldType = "text" | "password" | "email" | "number";
type InputOnChangeHandlerType = (value: InputStringType) => void;
type InputElementType = {
  value: InputStringType;
  type: InputFieldType;
  onChange: InputOnChangeHandlerType;
};


interface InputElementInterface {
  value: InputStringType;
  type: InputFieldType;
  onChange: InputOnChangeHandlerType;
}


