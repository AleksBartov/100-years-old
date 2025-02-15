import {
  Canvas,
  Mask,
  Group,
  Circle,
  Rect,
  useFont,
  Text,
} from "@shopify/react-native-skia";

export default function Index() {
  const fontSize = 32;
  const font = useFont(
    require("./../assets/fonts/PonomarUnicode.otf"),
    fontSize
  );
  return (
    <Canvas style={{ width: 256, height: 256 }}>
      <Mask
        mode="luminance"
        mask={
          <Group>
            <Circle cx={128} cy={128} r={128} color="white" />
            <Circle cx={128} cy={128} r={64} color="black" />
          </Group>
        }
      >
        <Rect x={0} y={0} width={256} height={256} color="lightblue" />
      </Mask>
      <Text x={0} y={fontSize} text="Hello World" font={font} />
    </Canvas>
  );
}
