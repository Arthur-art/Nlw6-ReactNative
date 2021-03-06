import React from "react";
import { ImageBackground, View, Text } from "react-native";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Fontisto } from "@expo/vector-icons"
import { BorderlessButton, FlatList } from "react-native-gesture-handler";
import { theme } from "../../../theme";
import BannerPng from "../../assets/banner.png"
import { style } from "./style"
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { Member } from "../../components/Member";
import { ButtonIcon } from "../../components/ButtonIcon";

export const members = [
    {
        id: '1',
        username: 'Arthur Teixeira',
        avatar_url: 'https://avatars.githubusercontent.com/u/54858003?v=4',
        status: 'online'
    },
    {
        id: '2',
        username: 'Arthur Teixeira',
        avatar_url: 'https://avatars.githubusercontent.com/u/54858003?v=4',
        status: 'offline'
    },
    {
        id: '3',
        username: 'Arthur Teixeira',
        avatar_url: 'https://avatars.githubusercontent.com/u/54858003?v=4',
        status: 'online'
    },
]

export function AppointmentsDetails() {
    const { primary } = theme.colors

    const handleAppointmentsDetails = () => {
        console.log("")
    }

    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto name="share" size={24} color={primary} />
                    </BorderlessButton>
                }
            />
            <ImageBackground
                source={BannerPng}
                style={style.banner}
            >

                <Text style={style.title}>Lendários</Text>
                <Text style={style.description}>
                    Saga challenger do yodismo, do challenger ao bronze em 1 semana
                </Text>

            </ImageBackground>

            <ListHeader title={"Jogadores"} subtitle={`Total: ${members.length}`} />
            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider />} />

            <View style={style.footer}>
                <ButtonIcon title={"Entrar na partida"} />
            </View>
        </Background>
    )
}