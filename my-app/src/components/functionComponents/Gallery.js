function Profile() {
	return (
		<img
			src="https://i.imgur.com/MK3eW3As.jpg"
			alt="Katherine Johnson"
		/>
	);
}

export default function Gallery() {
	return (

		<div className="gallery _block">
			<div className="gallery__container _container">
				<h2 className="gallery__subtitle subtitle">Gallery</h2>
				<h3 className="label">Amazing scientists</h3>
				<div className="gallery__content">

					<Profile />
					<Profile />
					<Profile />
					<Profile />
					<Profile />
					<Profile />

				</div>
			</div>
		</div>
	);
}