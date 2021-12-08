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
  fullName: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const toast = useToast();
  const emailAddressPattern =
    // eslint-disable-next-line no-control-regex
    /(?:[a-z0-9!#$%&'*+\\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;

  const formValidations = {
    fullName: {
      required: "Don't forget to add your full name!",
      minLength: {
        value: 2,
        message:
          "Is your full name really that short? The minimal number of characters is 2.",
      },
      maxLength: {
        value: 31,
        message:
          "Hey, the maximum number of characters is 31. Can you please abbreviate your name?",
      },
    },
    email: {
      required: "Please fill in using your preferred email address.",
      validate: {
        acceptedFormats: (value: string) =>
          emailAddressPattern.test(value) ||
          "Invalid email format. Please check if you missed something.",
      },
    },
    message: {
      required: "Are you forgetting to type the message?",
      minLength: {
        value: 20,
        message: "The minimal number of characters is 20",
      },
    },
  };

  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const onSubmit = async (data: MessageData): Promise<void> => {
    try {
      toast({
        status: "success",
        title: "Message sent",
        description:
          "Thank you! Your message has been sent! I will get back to you as soon as I can.",
      });
    } catch {
      toast({
        status: "error",
        title: "Message failed.",
        description:
          "Some error occurred when trying to send the message. Please try again.",
      });
    } finally {
      reset();
    }
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
        <FormLabel textTransform="uppercase" htmlFor="full-name">
          Full Name
        </FormLabel>
        <Input
          variant="outline"
          borderColor="gray.900"
          size="lg"
          _focus={{ outline: "none" }}
          _hover={{ outline: "none" }}
          errors={errors.fullName}
          {...register("fullName", formValidations.fullName)}
          isInvalid={!!errors.fullName}
        />
        <Text color="red.300" fontSize="0.9rem" pt="5px">
          {errors?.fullName?.message}
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
          Message
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
        SUBMIT
      </Button>
    </Stack>
  );
}
