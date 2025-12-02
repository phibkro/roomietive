import { Text, View, TouchableOpacity } from "react-native";
import { Container } from "@/components/container";
import { Card, Chip, useThemeColor } from "heroui-native";
import { usersTable } from "@/db/schema";
import { useEffect, useState } from "react";
import { db } from "@/db/drizzle";

export default function Home() {
  const [items, setItems] = useState<typeof usersTable.$inferSelect[] | null>(null);

    useEffect(() => {
      (async () => {
      const users = await db.select().from(usersTable);
      setItems(users);
    })();
  }, []);

	return (
		<Container className="p-6">
			<View className="py-4 mb-6">
				<Text className="text-4xl font-bold text-foreground mb-2">
					BETTER T STACK
				</Text>
				{items ? (
					items.map((item) => (
						<Card key={item.id} className="mb-4 p-4">
							<Text className="text-lg font-semibold text-foreground mb-1">
								{item.name}
							</Text>
							<Text className="text-foreground">Age: {item.age}</Text>
							<Text className="text-foreground">Email: {item.email}</Text>
						</Card>
					))
				) : (
					<Text className="text-foreground">No items available.</Text>
				)}
			</View>
		</Container>
	);
}
