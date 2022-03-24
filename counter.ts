class $my_counter extends $my_lom_view {

	count( next?: number ) {
		return $my_lom_storage.value( 'count' , next ) ?? 0
	}

	count_str( next?: string ) {
		return String( this.count(next ? Number(next) : undefined) )
	}

	inc() {
		this.count( this.count() + 1 )
	}

	dec() {
		this.count( this.count() - 1 )
	}

	_Inc = null as unknown as $my_lom_view
	Inc() {
		if (this._Inc) return this._Inc

		const obj = new $my_lom_button
		obj.title = ()=> '+'
		obj.click = ()=> this.inc()

		return this._Inc = obj
	}

	_Dec = null as unknown as $my_lom_view
	Dec() {
		if (this._Dec) return this._Dec

		const obj = new $my_lom_button
		obj.title = ()=> '-'
		obj.click = ()=> this.dec()

		return this._Dec = obj
	}

	_Count = null as unknown as $my_lom_view
	Count() {
		if (this._Count) return this._Count

		const obj = new $my_lom_input
		obj.value = (next?: string)=> this.count_str( next )

		return this._Count = obj
	}

	sub() {
		return [
			this.Dec(),
			this.Count(),
			this.Inc(),
		]
	}

	static mount() {
		if ( typeof document === 'undefined' ) return

		const node = document.querySelector( '#root' )
		const obj = new $my_counter()

		node?.replaceWith( obj.dom_tree() )

		setInterval( ()=> obj.dom_tree() , 100 )
	}
}

$my_counter.mount()
