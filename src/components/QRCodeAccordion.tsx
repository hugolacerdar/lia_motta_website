import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  FormControl,
  FormLabel,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Switch,
  Text,
  useClipboard,
} from "@chakra-ui/react";
import { useState } from "react";
import { RiCheckLine, RiFileCopyLine, RiQrCodeFill } from "react-icons/ri";
import formatMoney from "../../utils/formatMoney";

interface Product {
  title: string;
  description: string;
  price: number;
  pixDiscount: number;
  stripeUrl?: string;
  qrCode?: { imageUrl: string; code: string };
  productLink?: string;
  slug: string;
  updatedAt: string;
}

interface QRCodeAccordionProps {
  product: Product;
}

export default function QRCodeAccordion({ product }: QRCodeAccordionProps) {
  const [showQRCode, setShowQRCode] = useState(false);

  const { hasCopied, onCopy } = useClipboard(
    product.qrCode ? product.qrCode?.code : ""
  );

  return (
    <>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton
              borderRadius="var(--chakra-radii-md)"
              mt="20px"
              color="white"
              bgColor="gray.900"
              _hover={{
                bgColor: "white",
                color: "gray.900",
                borderColor: "gray.900",
                border: "1px",
              }}
              _focus={{ outline: "none" }}
              padding="25px"
              w="100%"
            >
              <Box flex="1" textAlign="center" fontWeight="bold">
                COMPRAR VIA PIX{" "}
                {product.pixDiscount > 0 &&
                  `- ${product.pixDiscount}% de desconto`}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {product.pixDiscount > 0 && (
              <>
                <Text>
                  De:{" "}
                  <Text as="span" textDecor="line-through">
                    {formatMoney(product.price)}
                  </Text>
                </Text>
                <Text>
                  por:{" "}
                  <Text as="span" fontWeight="bold">
                    {formatMoney(
                      product.price * (1.0 - product.pixDiscount / 100)
                    )}
                  </Text>{" "}
                </Text>
              </>
            )}
            <Text>
              <Text mt="20px" textAlign="justify">
                No momento, estamos enviando manualmente o e-book por e-mail.
                Logo, solicitamos o envio do comprovante de pagamento para o
                endereço de e-mail{" "}
                <Text as="span" fontWeight="bold">
                  contato@liamotta.com
                </Text>
                .
              </Text>
              <FormControl display="flex" alignItems="center" mt="10px">
                <FormLabel htmlFor="mail-condition" mb="0">
                  <Text fontWeight="bold">
                    Concordo com as condições acima:
                  </Text>
                </FormLabel>
                <Switch
                  id="mail-condition"
                  colorMode="light"
                  onChange={(e) => setShowQRCode(e.target.checked)}
                />
              </FormControl>
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      {showQRCode && product.qrCode ? (
        <Box>
          <Image
            src={product.qrCode.imageUrl}
            alt={product.qrCode.code}
            mx="auto"
            w="320px"
          />
          <InputGroup w="320px" mx="auto">
            <InputLeftElement pointerEvents="none">
              <Icon as={RiQrCodeFill} color="gray.900" />
            </InputLeftElement>
            <Input
              borderColor="gray.900"
              _focus={{
                outline: "none",
                backgroundColor: "gray.100",
              }}
              _hover={{
                backgroundColor: "gray.100",
                cursor: "pointer",
              }}
              onClick={onCopy}
              readOnly
              value={product.qrCode.code}
              isTruncated
              borderTopRightRadius="0"
              borderBottomRightRadius="0"
              borderRight="none"
            />
            <Button
              onClick={onCopy}
              color="white"
              bgColor="gray.900"
              _hover={{
                bgColor: "gray.700",
              }}
              _focus={{ outline: "none" }}
              borderTopLeftRadius="0"
              borderBottomLeftRadius="0"
            >
              {hasCopied ? (
                <Icon as={RiCheckLine} color="white" />
              ) : (
                <Icon as={RiFileCopyLine} color="white" />
              )}
            </Button>
          </InputGroup>
        </Box>
      ) : (
        ""
      )}
    </>
  );
}
