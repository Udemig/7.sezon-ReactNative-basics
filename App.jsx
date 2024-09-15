import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
// Identifer : iki kere kullanma haatsı
// import {View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* tüm elemanları kapsayan ana view */}
      <View style={{flex: 1, backgroundColor: 'orange'}}>
        {/* header alanını oluşturacğım view */}
        <View style={homeStyle.header}>
          {/* buton elementi her iki platformda kendi özelliğinde buton yapısını kullanır.  */}
          <Button title="Native Button" />

          {/* t.o ise sarmaladığı elemente basılabilirlik kazandırır.View ile tek farkı tıklanabilir olması. */}
          <TouchableOpacity
            style={{
              width: 150,
              height: 150,
              backgroundColor: 'orange',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'black'}}>Özel Buton</Text>
          </TouchableOpacity>
        </View>

        {/* sayfanın orta kısmı */}
        <View style={homeStyle.main}>
          <ScrollView>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {/* bağlantı üzerinden resim alma */}
              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://plus.unsplash.com/premium_photo-1723830306042-8d90d4b18492?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
                }}
              />
              {/* local dosyadan resim alma */}
              <Image
                style={homeStyle.image}
                source={require('./assets/images/indir.png')}
              />
              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1720535874037-a873d303ea75?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1724433530860-f094e39b64e7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1726178732861-1819683e6ee3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1725815979868-3c815a2cdeed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1725815979868-3c815a2cdeed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1725815979868-3c815a2cdeed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1725815979868-3c815a2cdeed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1725815979868-3c815a2cdeed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1725815979868-3c815a2cdeed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1725815979868-3c815a2cdeed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1725815979868-3c815a2cdeed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1725815979868-3c815a2cdeed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <Image
                style={homeStyle.image}
                source={{
                  uri: 'https://images.unsplash.com/photo-1725815979868-3c815a2cdeed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
            </View>
          </ScrollView>
        </View>

        {/* alt menu alanı */}
        <View style={homeStyle.bottomTab}>
          <View style={homeStyle.bottomBox}>
            <Text style={homeStyle.boxText}>Anasayfa</Text>
          </View>
          <View style={homeStyle.bottomBox}>
            <Text style={homeStyle.boxText}>Ara</Text>
          </View>
          <View style={homeStyle.bottomBox}>
            <Text style={homeStyle.boxText}>Kategoriler</Text>
          </View>
          <View style={homeStyle.bottomBox}>
            <Text style={homeStyle.boxText}>Profil</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const homeStyle = StyleSheet.create({
  header: {
    backgroundColor: '#FF8A8A',
    flex: 1,
  },
  main: {
    backgroundColor: '#F0EAAC',
    flex: 8,
  },
  image: {
    width: 140,
    height: 140,
    resizeMode: 'cover',
    margin: 1,
  },
  bottomTab: {
    backgroundColor: '#FF8A8A',
    flex: 1,
    flexDirection: 'row',
  },
  bottomBox: {
    backgroundColor: '#CCE0AC',
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
});

export default App;
