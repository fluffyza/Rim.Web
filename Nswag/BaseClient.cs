using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace Nswag
{
	public class BaseClient
	{
		public string BearerToken { get; private set; }

		protected Task<HttpRequestMessage> CreateHttpRequestMessageAsync(CancellationToken cancellationToken)
		{
			var msg = new HttpRequestMessage();
			//msg.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", BearerToken);
			return Task.FromResult(msg);
		}

		public void SetBearerToken(string token)
		{
			BearerToken = token;
		}

	}
}
