import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return (
    // farklı cihazlarda çentik gibi durumlardan kurtulmak için safeareaview ile sarmalıyoruz.
    <SafeAreaView>
      {/* stillendirme yaparken hem inline hemde dışarıdan stylesheet ile stiilendirme yaparız. */}
      <View
        style={{
          backgroundColor: 'red',
          margin: 10,
          padding: 20,
          height: 250,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* eğer string bir ifade yazacaksak mutlaka text componentinin içinde yszarız. */}
        <Text>Bu Birinci Notum</Text>
      </View>
      {/* raect native de stillendirme yaparken birim kullanılmaz */}
      <View
        style={{
          backgroundColor: 'yellow',
          margin: 10,
          padding: 20,
          height: 250,
        }}>
        <Text>Bu İkinci Notum</Text>
      </View>
      <View style={styles.wrapperBox}>
        <View style={styles.box}>
          <Text style={styles.boxText}>1</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>2</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>3</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>4</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>5</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>6</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>7</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapperBox: {
    backgroundColor: 'aqua',
    width: 350,
    height: 300,
    //sadece yatayda özellik vereceksek hozizontol eğer dikeyde vereceksek vertical
    marginHorizontal: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    backgroundColor: 'pink',
    margin: 10,
    width: 50,
    height: 50,
  },
  boxText: {
    fontSize: 20,
    fontWeight: '900',
  },
});

export default App;
