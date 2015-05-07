# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

chris = User.new({
  first_name: 'Chris',
  last_name: 'Stott',
  email: 'chris@email.com',
  password: 'password',
  zip_code: '94122' })

koz = User.new({
  first_name: 'Mister',
  last_name: 'Koz',
  email: 'koz@email.com',
  password: 'password',
  zip_code: '94102' })

chris.save
koz.save

businesses = Business.create([
  { name: "Koz's Kitchen",
    location: "UN Plaza, McAllister St, San Francisco",
    owner_id: koz.id, photo_url: 'https://s3-us-west-1.amazonaws.com/lunchin/assets/kozskitchen.jpg'
  },
  { name: 'Senor Sisig', location: "1061 Market St, San Francisco", photo_url: 'https://s3-us-west-1.amazonaws.com/lunchin/assets/senorsisig.jpg' },
  { name: 'Bacon Bacon', location: "135 Polk St, San Francisco", photo_url: 'https://s3-us-west-1.amazonaws.com/lunchin/assets/baconbacon.jpg' },
  { name: 'KoJa Kitchen', location: "110 5th St, San Francisco", photo_url: 'https://s3-us-west-1.amazonaws.com/lunchin/assets/kojakitchen.jpg' },
  { name: 'The Chairman', location: "Civic Center Plaza, San Francisco", photo_url: 'https://s3-us-west-1.amazonaws.com/lunchin/assets/thechairman.jpg' },
  { name: 'RoliRoti', location: "Ferry Building, San Francisco", photo_url: 'https://s3-us-west-1.amazonaws.com/lunchin/assets/roliroti.jpg' },
  { name: 'Seoul on Wheels', location: "60 Leavenworth St, San Francisco", photo_url: 'https://s3-us-west-1.amazonaws.com/lunchin/assets/seoulonwheels.jpg' } ])
