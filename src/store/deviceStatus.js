import {extendObservable} from 'mobx'

class DeviceStatus{
    constructor(){
        extendObservable(this,{
            online: false,
            capacity: 89,
            signal: 1,
            setTrueOnline: () => {
                this.online = true
            },
            setFalseOnline: () => {
                this.online = false
            },
            addOneCapacity: () => {
                if(this.capacity < 100)
                this.capacity += 1
            },
            addTenCapacity: () => {
                this.capacity += 10
                if(this.capacity > 100)
                    this.capacity = 100
            },
            reduceOneCapacity: () => {
                if(this.capacity > 0)
                    this.capacity -= 1
            },
            reduceTenCapacity: () => {
                this.capacity -= 10
                if(this.capacity < 0)
                    this.capacity = 0
            },
            addOneSignalLevel: () => {
                if(this.signal < 5)
                this.signal += 1
            },
            reduceOneSignalLevel: () => {
                if(this.signal > 1)
                    this.signal -= 1
            },
            setMaxSignalLevel: () => {
                this.signal = 5
            },
            setMinSignalLevel: () => {
                this.signal = 1
            },
        });
    }
}

export default new DeviceStatus;