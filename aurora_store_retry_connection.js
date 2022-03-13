if (Java.available) {
	Java.performNow(function() {
		var k7e = Java.use("k7.e")
		k7e.e.overload().implementation = function () {
			var url = this.originalRequest.value.url.value
			// We only want to retry the anonymous login step
			if (url.toString() !== "https://auroraoss.com/api/auth")
				return this.e()
			var retry = true
			while (retry) {
				try {
					// Instances from this class seem to work only once,
					// therefore we need to create and use a new instance
					// for each attempt; the new instance is a perfect copy 
					// of the original, which is never used itself.
					var tmp = k7e.$new(this.client.value, this.originalRequest.value, this.forWebSocket.value)
					var res = tmp.e()
					// If we did not get an exception here, it means that the call was successful
					retry = false
				} catch (error) {
					console.log(error)
				}
			}
			return res
		}
	})
}
