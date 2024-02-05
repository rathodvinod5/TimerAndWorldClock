import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text, ActivityIndicator, Keyboard } from "react-native";
// import lodash from 'lodash.debounce';
import { debounce } from 'lodash';
import STYLES from './Styles';
import { LocationDataType, NetworkDataType } from './types';
import { fetchData } from './Utils';


const TextInputContainer = ({
  // isLoading,
  onSelectLocation,
  locationsLen
  // getData
}: {
  // isLoading: boolean,
  onSelectLocation: (location: LocationDataType) => void,
  locationsLen: number
  // getData: (searchText: string) => void
}) => {
  let [textInputValue, onChangeTextInput] = useState('');
  let [filteredItems, setFilteredItems] = useState<LocationDataType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [keyboardStatus, setKeyboardStatus] = useState('');
  let inputRef = useRef<any>();


  let timer: ReturnType<typeof setTimeout> | null = null;

  useEffect(() => {
    inputRef.current.focus();

    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('Keyboard Shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('Keyboard Hidden');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => filterItems(textInputValue), 1000)

    return () => {
      if (timer) clearTimeout(timer);
    }
  }, [textInputValue]);

  const getData = async (text: string) => {
    setIsLoading(true);
    const data: NetworkDataType = await fetchData(text);
    if (data && data.records) setFilteredItems(data.records);

    setIsLoading(false);
  }

  // useEffect(() => {
  //   if (locationsLen && inputRef) {
  //     inputRef.current.focus();
  //   }
  // }, [locationsLen]);

  const filterItems = (text: string) => {
    if (text) {
      // const newFilteredItems: itemType[] = items.filter((item) => item.name.toLowerCase().search(text.toLowerCase()) > -1);
      // setFilteredItems(newFilteredItems);
      getData(text);
    } else {
      setFilteredItems([]);
    }
  }

  const onPressItem = (item: LocationDataType) => {
    onChangeTextInput('');
    setFilteredItems([]);
    onSelectLocation(item);
  }

  const debouncedHandleSearch = useCallback(debounce(filterItems, 1000), []);

  const onChangeText = (text: string) => {
    onChangeTextInput(text);
    // debouncedHandleSearch(text);
  }

  return (
    <View>
      <View>
        <TextInput
          autoFocus={locationsLen > 0}
          ref={inputRef}
          value={textInputValue}
          placeholder={"Enter city name"}
          onChangeText={onChangeText}
          style={STYLES.textInputStyles}
        />
        {isLoading ? (
          <View style={STYLES.activityCont}>
            <ActivityIndicator size={'small'} color={'teal'} />
          </View>
        ) : null}
      </View>
      {filteredItems.length ?
        (
          <FlatList
            data={filteredItems}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={STYLES.itemStyles}
                onPress={() => onPressItem(item)}
              >
                <Text style={STYLES.locationTitle}>
                  {item?.fields.asciiname || ''}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            // style={{ height: 50 }}
            contentContainerStyle={STYLES.flatlistCont}
          />
        )
        : null}
    </View>
  );
}

export default TextInputContainer;