import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Picker,
  Platform
} from "react-native";

const screen = Dimensions.get("window");

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = time => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  return { minutes: formatNumber(minutes), seconds: formatNumber(seconds) };
};
const createArray = length => {
  const arr = [];
  let i = 0;
  while (i < length) {
    arr.push(i.toString());
    i += 1;
  }

  return arr;
};

const AVAILABLE_MINUTES = createArray(10);
const AVAILABLE_SECONDS = createArray(60);

export default function App() {
  const [time, setTime] = React.useState({ minutes: 0, seconds: 5 });
  const [remainingSeconds, setRemainingSeconds] = React.useState(0);
  const [isRunning, setRunning] = React.useState(false);
  const { minutes, seconds } = getRemaining(remainingSeconds);

  React.useEffect(() => {
    let timer = null;
    if (remainingSeconds === 0) {
      setRemainingSeconds(5);
      setRunning(false);
    } else {
      if (isRunning) {
        timer = setInterval(
          () => setRemainingSeconds(remainingSeconds => remainingSeconds - 1),
          1000
        );
      }
    }
    return () => clearInterval(timer);
  }, [isRunning, remainingSeconds]);

  const start = () => {
    const minutesToSecondsParsed = parseInt(time.minutes, 10) * 60;
    const secondsParsed = parseInt(time.seconds, 10);
    setRemainingSeconds(minutesToSecondsParsed + secondsParsed);
    setRunning(true);
  };
  const stop = () => setRunning(false);
  const onChangeTime = (selectedTime, name) => {
    setTime({ ...time, [name]: selectedTime });
  };

  const renderPicker = () => {
    return (
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          itemStyle={styles.pickerItem}
          selectedValue={time.minutes}
          onValueChange={value => onChangeTime(value, "minutes")}
        >
          {AVAILABLE_MINUTES.map(v => (
            <Picker.Item key={v} label={v} value={v} />
          ))}
        </Picker>
        <Text style={styles.pickerItem}>minutes</Text>
        <Picker
          style={styles.picker}
          itemStyle={styles.pickerItem}
          selectedValue={time.seconds}
          onValueChange={value => onChangeTime(value, "seconds")}
        >
          {AVAILABLE_SECONDS.map(v => (
            <Picker.Item key={v} label={v} value={v} />
          ))}
        </Picker>
        <Text style={styles.pickerItem}>seconds</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {isRunning ? (
        <Text style={styles.timer}>{`${minutes}:${seconds}`}</Text>
      ) : (
        renderPicker()
      )}
      {isRunning ? (
        <TouchableOpacity
          onPress={stop}
          style={[styles.button, styles.buttonStop]}
        >
          <Text style={[styles.buttonText, styles.buttonTextStop]}>Stop</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={start} style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#07121B",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    borderWidth: 10,
    borderColor: "#89AAFF",
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonStop: {
    borderColor: "#FF851B"
  },
  buttonText: {
    fontSize: 45,
    color: "#89AAFF"
  },
  buttonTextStop: {
    color: "#FF851B"
  },
  timer: {
    fontSize: 90,
    color: "#fff",
    marginBottom: 30
  },
  picker: {
    width: 50,
    ...Platform.select({
      android: {
        color: "#fff",
        backgroundColor: "#07121B",
        marginLeft: 10
      }
    })
  },
  pickerItem: {
    color: "#fff",
    fontSize: 20
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});
