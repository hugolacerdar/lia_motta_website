import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  useToast,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface MessageData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const toast = useToast();
  const emailAddressPattern =
    // eslint-disable-next-line no-control-regex
    /(?:[a-z0-9!#$%&'*+\\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;

  const formValidations = {
    name: {
      required: "Não esqueça de preencher seu nome.",
      minLength: {
        value: 2,
        message: "O número mínimo de caracteres é 2.",
      },
      maxLength: {
        value: 31,
        message: "O número máximo de caracteres é 31",
      },
    },
    email: {
      required: "Por favor, preencha utilizando o seu email favorito.",
      validate: {
        acceptedFormats: (value: string) =>
          emailAddressPattern.test(value) ||
          "Formato de email inválido. Por favor, cheque se esqueceu de algo.",
      },
    },
    message: {
      required: "Parece que esqueceu de preencher sua mensagem.",
      minLength: {
        value: 20,
        message: "O número mínimo de caracteres é 20.",
      },
    },
  };

  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const onSubmit = async (data: MessageData): Promise<void> => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        toast({
          status: "success",
          title: "Mensagem enviada!",
          description:
            "Obrigada! Sua mensagem foi enviada! Te responderei assim que possível.",
        });
        reset();
      } else {
        toast({
          status: "error",
          title: "Mensagem não enviada.",
          description: "Desculpe. Ocorreu algum erro. Tente novamente.",
        });
      }
    });
  };
  return (
    <Stack
      as="form"
      w={["350px", "500px", "700px"]}
      mx="auto"
      spacing="30px"
      mt="20px"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl>
        <FormLabel textTransform="uppercase" htmlFor="name">
          Nome
        </FormLabel>
        <Input
          variant="outline"
          borderColor="gray.900"
          size="lg"
          _focus={{ outline: "none" }}
          _hover={{ outline: "none" }}
          errors={errors.name}
          {...register("name", formValidations.name)}
          isInvalid={!!errors.name}
        />
        <Text color="red.300" fontSize="0.9rem" pt="5px">
          {errors?.name?.message}
        </Text>
      </FormControl>
      <FormControl>
        <FormLabel textTransform="uppercase" htmlFor="email">
          Email
        </FormLabel>
        <Input
          variant="outline"
          borderColor="gray.900"
          size="lg"
          _focus={{ outline: "none" }}
          _hover={{ outline: "none" }}
          errors={errors.email}
          {...register("email", formValidations.email)}
          isInvalid={!!errors.email}
        />
        <Text color="red.300" fontSize="0.9rem" pt="5px">
          {errors?.email?.message}
        </Text>
      </FormControl>
      <FormControl>
        <FormLabel textTransform="uppercase" htmlFor="message">
          Mensagem
        </FormLabel>
        <Textarea
          variant="outline"
          borderColor="gray.900"
          size="lg"
          errors={errors.message}
          _focus={{ outline: "none" }}
          _hover={{ outline: "none" }}
          {...register("message", formValidations.message)}
          isInvalid={!!errors.message}
        />
        <Text color="red.300" fontSize="0.9rem" pt="5px">
          {errors?.message?.message}
        </Text>
      </FormControl>
      <Button
        type="submit"
        mt="30px"
        color="white"
        bgColor="gray.900"
        _hover={{
          bgColor: "white",
          color: "gray.900",
          borderColor: "gray.900",
          border: "1px",
        }}
        _focus={{ outline: "none" }}
        padding="35px"
        w="100%"
        isLoading={formState.isSubmitting}
        isDisabled={formState.isSubmitting}
        onClick={() => console.log("")}
      >
        ENVIAR
      </Button>
    </Stack>
  );
}
