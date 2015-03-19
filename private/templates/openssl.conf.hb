HOME			= .
RANDFILE		= $ENV::HOME/.rnd

oid_section		= new_oids

[ new_oids ]

[ ca ]
default_ca	= CA_default		# The default ca section

[ CA_default ]

dir		= .		# Where everything is kept
certs		= $dir/certs		# Where the issued certs are kept
crl_dir		= $dir/crl		# Where the issued crl are kept
database	= $dir/index.txt	# database index file.
new_certs_dir	= $dir/newcerts		# default place for new certs.
certificate	= $dir/cacrt.pem 	# The CA certificate
serial		= $dir/serial 		# The current serial number
crlnumber	= $dir/crlnumber	# the current crl number
crl		= $dir/crl.pem 		# The current CRL
private_key	= $dir/cakey.pem# The private key
RANDFILE	= $dir/private/.rand	# private random number file

x509_extensions	= usr_cert		# The extentions to add to the cert

name_opt 	= ca_default		# Subject Name options
cert_opt 	= ca_default		# Certificate field options

default_days	= 365			# how long to certify for
default_crl_days= 30			# how long before next CRL
default_md	= default		# use public key default MD
preserve	= no			# keep passed DN ordering

policy		= policy_match

[ policy_match ]
countryName		= match
stateOrProvinceName	= match
organizationName	= match
organizationalUnitName	= optional
commonName		= supplied
emailAddress		= optional

[ policy_anything ]
countryName		= optional
stateOrProvinceName	= optional
localityName		= optional
organizationName	= optional
organizationalUnitName	= optional
commonName		= supplied
emailAddress		= optional

[ req ]
default_bits		= 2048
default_keyfile 	= privkey.pem
distinguished_name	= req_distinguished_name
#attributes		= req_attributes
x509_extensions	= v3_ca
prompt = no
string_mask = utf8only

[ req_distinguished_name ]
countryName			= {{ country }}
stateOrProvinceName		= {{ state }}
localityName			= {{ locale_name }}
0.organizationName		= {{ org_name }}
commonName			= {{ cn }}
emailAddress			= {{ email }}

[ req_attributes ]
challengePassword		= A challenge password
challengePassword_min		= 4
challengePassword_max		= 20

[ usr_cert ]
basicConstraints=CA:FALSE
nsCertType = client, email, objsign
nsComment			= "OpenSSL Generated Certificate"
subjectKeyIdentifier=hash
authorityKeyIdentifier=keyid,issuer

[ server_cert ]
basicConstraints=CA:FALSE
nsCertType			= server
nsComment			= "OpenSSL Generated Certificate"
subjectKeyIdentifier=hash
authorityKeyIdentifier=keyid,issuer

[ v3_req ]

basicConstraints = CA:FALSE
keyUsage = nonRepudiation, digitalSignature, keyEncipherment

[ v3_ca ]
subjectKeyIdentifier=hash
authorityKeyIdentifier=keyid:always,issuer
basicConstraints = CA:true

[ crl_ext ]
authorityKeyIdentifier=keyid:always
