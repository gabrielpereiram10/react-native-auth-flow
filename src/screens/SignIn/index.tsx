import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons"
import { Box, Center, Input, FormControl, VStack, Icon, IconButton, Button, WarningOutlineIcon } from "native-base";
import * as yup from 'yup'
import { Formik } from "formik";
import { useAuth } from "../../contexts/auth";
import { ActivityIndicator, Alert } from "react-native";

const initialValues = {
	email: "",
	password: ""
}

const validationSchema = yup.object().shape({
	email: yup.string().email("E-email inválido").required("E-mail é obrigatório"),
	password: yup.string().required("Senha é obrigatória")
})


export const SignInScreen = () => {
	const { signIn } = useAuth()
	const [visiblePassword, setVisiblePassword] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	function changePasswordVisibility() {
		setVisiblePassword(!visiblePassword)
	}

	async function handleSubmit(values: any) {
		setIsLoading(true)
		const result = await signIn(values)
		setIsLoading(false)
		if (!result.success) Alert.alert("", result.message)
	}

	return (
		<Center
			height="full"
		>
			<VStack width="full" p={5} >
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({
						handleChange,
						handleBlur,
						errors,
						touched,
						handleSubmit,
						values,
						submitCount
					}) => (
						<Box width="full">
							<FormControl isInvalid={Boolean(errors.email && touched.email)}>
								<FormControl.Label>Email</FormControl.Label>
								<Input
									onChangeText={handleChange("email")}
									onBlur={handleBlur("email")}
									value={values.email}
									placeholder="E-mail"
									InputLeftElement={
										<Icon
											as={<MaterialIcons name="person" />}
											size={5}
											ml={2}
											color="muted.400"
										/>
									}
								/>
								<FormControl.ErrorMessage
									leftIcon={<WarningOutlineIcon size="xs" />}
								>
									{errors.email}
								</FormControl.ErrorMessage>
							</FormControl>
							<FormControl isInvalid={Boolean(errors.password && touched.password)}>
								<FormControl.Label>Senha</FormControl.Label>
								<Input
									onChangeText={handleChange("password")}
									onBlur={handleBlur("password")}
									value={values.password}
									placeholder="sua senha"
									type={visiblePassword ? "text" : "password"}
									InputLeftElement={
										<Icon
											as={<MaterialIcons name="lock" />}
											size={5}
											ml={2}
											color="muted.400"
										/>
									}
									InputRightElement={
										<IconButton
											icon={
												<Icon
													as={
														<MaterialIcons
															name={visiblePassword ? "visibility-off" : "visibility"}
															onPress={changePasswordVisibility}
														/>
													}
													size={5}
													ml={2}
												/>
											}
										/>
									}
								/>
								<FormControl.ErrorMessage
									leftIcon={<WarningOutlineIcon size="xs" />}
								>
									{errors.password}
								</FormControl.ErrorMessage>
							</FormControl>
							<Button
								mt="7"
								colorScheme="green"
								onPress={() => handleSubmit()}
							>
								{
									isLoading ?
										<ActivityIndicator color="white" animating={true} size="small" /> :
										"Entrar"
								}
							</Button>
						</Box>
					)}
				</Formik>
			</VStack>
		</Center>
	)
}