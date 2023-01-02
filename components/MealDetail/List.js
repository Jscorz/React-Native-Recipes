import { Text, View, StyleSheet } from "react-native";

function List({ data }) {
	return data.map((dataPoint) => {
		<View key={dataPoint}>
			<Text>{dataPoint}</Text>;
		</View>;
	});
}

export default List;

const styles = StyleSheet.create({});
